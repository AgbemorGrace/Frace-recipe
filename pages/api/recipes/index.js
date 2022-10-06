import Recipe from "../../../models/recipes";
import db from "../../../lib/dbConnect";

export default async function handler(req, res ){
    if (req.mrthod !== "GET" || req.method !=="POST" ) {
        res.status(405).json({error: "only POST and GETmethods are allowed "});
    }
    if (req.method === "GET" ) {
        await db.connect();

        const recipe = await Recipet.find({});

        await db.disconnect();

        res.status(200).json({recipe});
        return;
    } else if (req.method === "POST") {
        await db.connect;

        const { food,area, ingrediants, instructions} = req.body;

        const recipe= await post.create({
            food,area,ingrediants,instructions
         });
         await db.disconnect();

         res.status(201).json({recipe});
    }
    
}