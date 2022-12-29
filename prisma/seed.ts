import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const pet = await prisma.pet.create({
        data:{
            nome: "Jake",
            idade: "1",
            tipo:"cachorro",
            donoPet: "John Doe",
            telefoneDonoPet: "(99)99999-9999"
        }
    })
}

main();
