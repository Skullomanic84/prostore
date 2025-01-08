"use server";

import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMITS } from "@/lib/constants";
//Get latest products

export async function getLatestProducts() {
    const prisma = new PrismaClient();

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMITS,
        orderBy: {createdAt: 'desc'}
    });

    return convertToPlainObject(data);
}