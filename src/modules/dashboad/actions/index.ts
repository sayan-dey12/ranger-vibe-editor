"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/modules/auth/actions";
import { Truck } from "lucide-react";
import { revalidatePath } from "next/cache";


export const getAllPlaygroundForUser = async()=>{
    const user = await currentUser();

    try {
        const playground = await db.playground.findMany({
            where:{
                userId:user?.id
            },
            include:{
                user:true
            }
        });

        return playground
    } catch (error) {
        console.log(error)
    }
}

export const createPlayground = async(data:{
    title:string ;
     template:"REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
     description?:string;
})=>{
    const user = await currentUser();
    const {title, template, description} = data;
    try {
        const playground = await db.playground.create({
            data:{
                title:title,
                template:template,
                description:description!,
                userId:user?.id!,
            }
        });
        return playground;
    } catch (error) {
        console.log(error);
        
    }
}

export const deletePlayground = async(id:string)=>{
    try {
        await db.playground.delete({
            where:{
                id,
            },
        });
        revalidatePath("/dashboard");
    } catch (error) {
        console.log(error);
    }
}

export const editPlayground = async(id:string , data:{
    title:string;
    description?:string;
})=>{
    try {
        await db.playground.update({
        where:{
            id,
        },
        data:data,
        });
        revalidatePath("/dashboard");
    } catch (error) {
        console.log(error);
        
    }
}


export const duplicatePlaground = async(id:string)=>{
    try {
        const originalPlayground = await db.playground.findUnique({
            where:{
                id,
                // todo: add tempalte files
            }
        });
        if(!originalPlayground){
            throw new Error("Original Playground Not Found");
        }
        const duplicatePlaground = await db.playground.create({
            data:{
                title: `${originalPlayground.title} - (Copy)`,
                description: originalPlayground.description,
                template: originalPlayground.template,
                userId: originalPlayground.userId,
                // todo: add template files
            }
        });
        revalidatePath("/dashboard");
        return duplicatePlaground;
    } catch (error) {
        console.log(error);
    }
}