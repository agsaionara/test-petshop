import express, {request, response} from 'express';
import cors from 'cors';
import {PrismaClient} from '@prisma/client'

const app = express();

app.use(express.json());

app.use(cors());

export const prisma = new PrismaClient({
    log: ['query'],
}); 


app.post('/createpet',  async (request,response)=>{
    const body = request.body;

    const newPet = await prisma.pet.create({
        data:{
            nome: body.nome,    
            idade: body.idade,
            tipo: body.tipo,
            donoPet: body.donoPet,
            telefoneDonoPet: body.telefoneDonoPet, 
        }
    })

    return response.status(201).json(newPet);
});

app.get('/listpets', async (request, response) => {
    const pets = await prisma.pet.findMany({})

    return response.json(pets);
})


app.get("/listpet/:id", async (request, response)=>{
    const {id} = request.params;

    const pets = await prisma.pet.findUnique({
        where:{
            id: parseInt(id),
        },
    })
    return response.status(200).json(pets)
})

app.delete("/deletepet/:id", async (request, response) =>{
    const {id} = request.params;

    const pets = await prisma.pet.delete({
        where:{
            id: parseInt(id),
        },
    })

    return response.status(200).json({message: `O Pet foi excluido ${id}`})

})

app.listen((process.env.PORT || 3333), () =>{
    console.log("Servidor está rodando...")
} );