<template>
    <div class="container-add-product">
        <div class="warn-add">
            <h1>Tambah Produk</h1>
            <div class="warn-txt">
                <p>
                    Pastikan produk Anda sudah sesuai dengan syarat dan ketentuan Tokopedia.
                    Tokopedia menghimbau seller untuk menjual produk dengar harga yang wajar atau produk Anda dapat diturunkan oleh Tokopedia sesuai S&K yang berlaku.
                </p>
            </div>
            <div class="upload-product">
                <div class="attention">
                    <h1>Upload Produk</h1>
                    <p>Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px (Untuk gambar optimal gunakan ukuran minimum 700 x 700 px)</p>
                </div>
                <div class="squarepants"></div>
                <div class="footer-upload"></div>
            </div>
            <div class="info-procut"></div>
            <div class="desc-product"></div>
            <div class="varian-product"></div>
            <div class="price-product"></div>
            <div class="management-product"></div>
            <div class="weight-product"></div>
            
        </div>
    </div>
</template>

<script>
export default {
    name : "addProduct"
}
</script>

<style scoped>
    .container-add-product{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
    }  
    .upload-product{
        width: 1000px;
        height: 407px;
        background: #ffffff;
        color: rgba(0, 0, 0, 0.54);
        margin: 20px 0;
        padding: 30px;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
    }
    .info-procut{
        width: 1000px;
        height: 372px;
        background: #ffffff;
        margin: 20px 0;
        padding: 30px;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
    }
    .desc-product{
        width: 1000px;
        height: 657px;
        background: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
        margin: 20px 0;
        padding: 30px;
    }
    .varian-product{
        width: 1000px;
        height: 135px;
        background: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
        margin: 20px 0;
        padding: 30px;
    }
    .price-product{
        width: 1000px;
        height: 379px;
        background: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
        margin: 20px 0;
        padding: 30px;
    }
    .management-product{
        width: 1000px;
        height: 364px;
        background: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
        margin: 20px 0;
        padding: 30px;
    }
    .weight-product{
        width: 1000px;
        height: 373px;
        background: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px 0px;
        margin: 20px 0;
        padding: 30px;
    }
</style>