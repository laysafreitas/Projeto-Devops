import connection from "./connection";

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
  };

  const createTable = async () =>{
    try{
        await connection.raw(`
        
         CREATE TABLE IF NOT EXISTS quiz(
            id INT AUTO_INCREMENT PRIMARY KEY,
            tema VARCHAR(64) NOT NULL,
            perguntas VARCHAR(64) NOT NULL,
            A_alter VARCHAR(64) NOT NULL,
            B_alter VARCHAR(64) NOT NULL,
            C_alter VARCHAR(64) NOT NULL,
            D_alter VARCHAR(64) NOT NULL,
            resposta VARCHAR(64) NOT NULL
            )`);
            console.log('tabela criada com sucesso')
      }catch(error){
        printError(error);
    }finally{
        closeConnection();
      }
  }

    const closeConnection = () => {
    connection.destroy();
  };

  createTable();


