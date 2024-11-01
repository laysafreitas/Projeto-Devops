import { Request, Response } from "express";
import connection from "./data/connection";

export default async function GetQuiz(
    req: Request,
    res:Response
):Promise<void>{
    try{

        
        const Result= await connection('quiz')
        .select('*')


        res.status(200).json(Result[0])


    }catch(error: any){
        res.status(500).json({ message: error.message })
    }
}