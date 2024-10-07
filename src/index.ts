//prisma auto generated clients using npx prisma generate

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function insertUser(email : string, firstName : string, lastName : string, password : string){
    const res = await prisma.user.create({
        data:{
            email,
            firstName,
            lastName,
            password
        }
    })
    console.log(res);
}

interface UpdateParams{
    firstName : string,
    lastName : string,
}

async function updateUser(username : string, {
    firstName,
    lastName
}: UpdateParams){
    const res= await prisma.user.update({
        where : {email : username},
        data : {
            firstName,
            lastName
        }
    })
    console.log(res)
}

async function getUser(){
    const res =  await prisma.user.findMany();
    console.log(res);
}

getUser();

updateUser("sulphur@gmail.com",{
    firstName : "Professor",
    lastName : "Doom"
})

insertUser("sulphur@gmail.com","abu","dabi","dubai")

