<template>
    <!-- <h2>edit Contact</h2> -->
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Edit Contact</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, debitis! Magni odio eveniet praesentium recusandae ducimus aspernatur commodi perspiciatis nobis molestias quis libero mollitia, veniam omnis minus nulla laudantium in.</p>

            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-3">
                <form>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Photo URL">
                    </div>
                    <div class="mb-2">
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input type="number" class="form-control" placeholder="Mobile">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Company">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Title">
                    </div>
                    <div class="mb-2">
                        <select class="form-control">
                            <option value="">Select Group</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Update">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" srcset="" class="contact-img">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"editContact",
}
</script>
<style lang="">
    
</style>