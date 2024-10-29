import { Request, Response } from "express";
import connection from "./data/connection";
import { TQuiz } from "./type";



export default async function InsertQuiz(
    req:Request,
    res:Response
):Promise<void> {
    try{
    const {tema,perguntas, A_alter, B_alter, C_alter, D_alter,resposta}= req.body

    if(!tema || !perguntas || !A_alter|| !B_alter|| !C_alter || !D_alter || !resposta){
        res.statusCode = 422 
        throw new Error("preencha os campos 'tema', 'perguntas' , 'alternativa A','alternativa b' ,'alternativa c','alternativa d' e ' respostas'")
    }

     const [QuizExist] =  await connection('quiz')
     .where({tema})

     if(QuizExist){
        res.statusCode=409
        throw new Error("Tema já registrado");
     }


   const idQuizInserido :TQuiz = {tema,perguntas,A_alter, B_alter,C_alter, D_alter,resposta} 
   await connection('Quiz')
   .insert({
    tema: idQuizInserido.tema,
    perguntas:idQuizInserido.perguntas,
    A_alter: idQuizInserido.A_alter,
    B_alter: idQuizInserido.B_alter,
    C_alter: idQuizInserido.C_alter,
    D_alter: idQuizInserido.D_alter,
    resposta: idQuizInserido.resposta
   });
  

   res.status(201).json({idQuizInserido})

    }catch(error:any){
    res.status(500).json({ message: error.message })
    }
}