import categoryModel from "../models/categoryModel.js"
import slugify from "slugify"

export const createCategoryController = async(req,res)=>{
    try {
        const {name} = req.body
        if(!name){
            return res.status(401).send({
                success:false,
                message:"Name is required"
            })
        }
        const existingCategory = await categoryModel.findOne({name})

        if(existingCategory){
            return res.status(200).send({
                success:false,
                message:'Category already exist'
            })
        }
        const category = await new categoryModel({name, slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:"New Category Created",
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Category",
            error
        })
    }
}

export const updateCategoryController = async(req,res)=>{
    try {
        const {name} = req.body
        const {id} = req.params
        const category = await categoryModel.findById(id)
        if(!category){
            return res.status(200).send({
                success:false,
                message:"Category Does Not Exist"
            })
        }
        // await categoryModel.updateOne({name, slug:slugify(name)},{new:true})
        const updatedCategory = await categoryModel.findByIdAndUpdate(id,{name, slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:"Category Updated Successfully",
            updatedCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while updating category"
        })
    }
}

export const categoryController = async (req,res)=>{
    try {
        const categories = await categoryModel.find({})
        res.status(200).send({
            success:true,
            message: "All Category List",
            categories
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error while accessing categories",
            error
        })
    }
}
export const singleCategoryController = async(req,res)=>{
    try {
        const category = await categoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:"Single category accessed",
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error while getting single category",
            error
        })
    }
}

export const deleteCategoryController = async(req,res)=>{
    try {
        const {id} = req.params
        const category = await categoryModel.findById(id)
        if(!category){
            return res.status(200).send({
                success:false,
                message:" category does not  exist",
                category
            })
        }
        await categoryModel.deleteOne(category)
        res.status(200).send({
            success:true,
            message:" category deleted Successfully",
            category
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error while getting deleting category",
            error
        })
    }
}