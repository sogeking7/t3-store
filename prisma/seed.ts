import {PrismaClient} from '@prisma/client'
import {faker} from "@faker-js/faker";
import {categories} from "../components/layout/filter-bar/filter-bar";

const prisma = new PrismaClient ();

async function main () {
    console.log("seeding");
    await prisma.product.deleteMany();
    for (let i = 0; i < 100; i++) {
        // await createProduct();
    }
    // await initCategories();



}
async function createProduct() {
    const categoryId = faker.number.int({min: 1, max: categories.length});

    console.log("categoryId: ", categoryId);
    await prisma.product.create({
        data: {
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: faker.number.int({min: 1, max: 1000}),
            quantity: faker.number.int({max: 100}),
            rating: faker.number.float({min: 0, max: 5}),
            brand: faker.commerce.productAdjective(),
            categoryId
        },
    });
}

async function initCategories() {
    for (let i = 0; i < categories.length; i++) {
        await prisma.category.create({
            data: {
                name: categories[i]!.name,
            }
        })
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })