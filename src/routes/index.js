import {Router} from "express"//una parte de la aplicación para separar las rutas
const router = Router()


router.get("/",(req,res)=> res.render("index",{tittle:"Bienvenido",visitas:5}))//ruta principal

router.get("/about",(req,res)=> res.render("about", {tittle:"Acerca de nosotros"}))//ruta acerca de nosotros

router.get("/contact",(req,res)=> res.render("contact",{tittle:"Contacto"}))//ruta contacto

router.get("/productos",(req,res)=> res.render("productos",{tittle:"productos"}))//ruta contacto

export default router