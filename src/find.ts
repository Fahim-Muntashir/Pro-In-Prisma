import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async() => {
    
    const getAllFromDB = await prisma.post.findMany();
   
    //Find First and Find First and throw 
    const findFirst = await prisma.post.findFirstOrThrow({
        where: {
           id:1
       }
    });
    
    const findUnique = await prisma.post.findUnique({
        where: {
            id:2
        }
    })

    console.log({findFirst});
    
}
main();