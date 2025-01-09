"use server";

import { prisma } from "@/db/prisma"
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMITS } from "@/lib/constants";
//Get latest products

export async function getLatestProducts() {


    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMITS,
        orderBy: {createdAt: 'desc'}
    });

    return convertToPlainObject(data);
}