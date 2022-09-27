import { createRouter,createWebHistory } from "vue-router"
import HomeComponent from "../view/HomeComponent"
import contactManger from "../view/contactManger"
import addContact from "../view/addContact"
import editContact from "../view/editContact"
import viewContact from "../view/viewContact"
import pageNotfound from "../view/pageNotfound"
const routes =[{
    path:'/',
    name:'HomeComponent',
    redirect:"/contacts",
    component:HomeComponent,
},
{
    path:'/contacts',
    name:'contactManger',
    component:contactManger,
},
{
    path:'/contacts/add',
    name:'addContact',
    component:addContact,
},
{
    path:'/contacts/edit/:contactId',
    name:'editContact',
    component:editContact,
},
{
    path:'/contacts/view/:contactId',
    name:'viewContact',
    component:viewContact,
},
{
    path:'/:pathMatch(.*)*',//regular expression for page not found
    name:'pageNotfound',
    component:pageNotfound,
},]

const router=createRouter(
    {
        routes: routes,
        history: createWebHistory(),
    }
)
export default router