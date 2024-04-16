import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // const createUser = await prisma.user.create({
    //     data: {
    //         username: 'user2',
    //         email: 'user2@example.com',
    //         role: UserRole.user
    //     }
    // })


    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "tjhs is bio",
    //         userId:1,
    //     }
    // })


    // const createCategory = await prisma.category.create({
    //     data: {
    //         name:""
    //     }
    // })


    const createPost = await prisma.post.create({
        data: {
            title: "This is Title 5",
            content: "this is content of the post",
            authorId: 1,
            postCategory: {
                create: [
                    {
                        categoryId: 1,
                    },
                    {
                        categoryId: 2,
                    },
                    {
                        categoryId: 3,
                    },
                ]
            }
        },
            include: {
                postCategory:true
            }

    })

    console.log(createPost);
    
}
main();