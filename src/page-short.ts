import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const pageShort = async() => {

    // offset pagination
  //  const offsetData = await prisma.post.findMany({
   //     skip: 4,
     //   take:4,
    //});

   
    // // cursor based paginatiom
    // const cursorData = await prisma.post.findMany({
    //     skip: 5,
    //     take: 2,
    //     cursor: {
    //         id:15
    //     }
    // })
    // console.log(cursorData);
    


    const sortData = await prisma.post.findMany({
        orderBy: {
            id:"asc"
        }, where: {
            title: "Title 1"
        }

    })
    console.log(sortData);

}
pageShort();