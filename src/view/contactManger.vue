<template>
    <!-- <h2>contact manger</h2> -->
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Contact Manger 
                    <router-link to="/contacts/add" class="btn btn-success btn-sm"><fa icon="plus-circle"></fa>New</router-link>
                </p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum temporibus dicta incidunt nisi deserunt officiis sed laborum, eius, voluptatem consequuntur voluptas. Reiciendis nisi facere incidunt recusandae sit dolor sunt?</p>
                <form>
                   
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Search Name">
                                </div>
                                <div class="col">
                                    <input type="submit" class="btn btn-outline-dark">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="card my-2 list-group-item-success shadow-lg">
                    <div class="card-body d-flex">
                        <div class="col-sm-4">
                           <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" srcset="" class="contact-img"> 
                        </div>
                        <div class="col-sm-7">
                            <ul class="list-group">
                                <li class="list-group-item">Name:<span class="fw-bold">Name</span></li>
                                <li class="list-group-item">Email:<span class="fw-bold">Email</span></li>
                                <li class="list-group-item">Mobile:<span class="fw-bold">Mobile</span></li>
                            </ul>
                        </div>
                        <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                            <router-link to="/contacts/view/:contactId" class="my-2 btn btn-warning">
                                <fa icon="eye"/>
                            </router-link>
                            <router-link to="/contacts/edit/:contactId" class="my-2 btn btn-primary">
                                <fa icon="pen"/>
                            </router-link>
                            <button class="btn btn-danger my-2">
                                <fa icon="trash"></fa>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"contactManger",
}
</script>
<style lang="">
    
</style>