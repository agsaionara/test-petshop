-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "idade" VARCHAR(10) NOT NULL,
    "tipo" VARCHAR(255) NOT NULL,
    "donoPet" VARCHAR(255) NOT NULL,
    "telefoneDonoPet" VARCHAR(100) NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);
