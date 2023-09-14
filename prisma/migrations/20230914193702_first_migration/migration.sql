-- CreateTable
CREATE TABLE "doctors" (
    "id" SERIAL NOT NULL,
    "med_register" INTEGER NOT NULL,
    "full_name" VARCHAR(200) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "password" VARCHAR(250) NOT NULL,
    "birth_date" DATE NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(150) NOT NULL,
    "state" VARCHAR(150) NOT NULL,
    "permition" INTEGER NOT NULL,
    "specialty" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "doctors_pkey" PRIMARY KEY ("med_register")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "full_name" VARCHAR(200) NOT NULL,
    "user_cpf" VARCHAR(200) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "password" VARCHAR(250) NOT NULL,
    "birth_date" DATE NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(150) NOT NULL,
    "state" VARCHAR(150) NOT NULL,
    "permition" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_cpf")
);

-- CreateIndex
CREATE UNIQUE INDEX "doctors_id_key" ON "doctors"("id");

-- CreateIndex
CREATE UNIQUE INDEX "doctors_email_key" ON "doctors"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
