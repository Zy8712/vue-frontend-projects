<script>
    
</script>

<template>
    <main>
        <div class="card-comp">
            <div class="card-inner">
                <img src="/qr-code-component-assets/image-qr-code.png" alt="" />
                <div>
                    <h1>Improve your front-end skills by building projects</h1>
                    <p>
                        Scan the QR code to visit Frontend Mentor and take your
                        coding skills to the next level
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @font-face {
        font-family: "Outfit";
        src: url("/qr-code-component-assets/Outfit-VariableFont_wght.ttf") format("truetype");
    }

    main {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: hsl(212, 45%, 89%);
        font-family: 'Outfit';
    }

    .card-comp {
        width: 320px;
        height: 497px;
        background-color: white;
        border-style: none;
        border-radius: 20px;
        box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        padding: 16px;
    }

    .card-inner {
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .card-inner > div {
        margin: 0px 16px;
    }

    img {
        width: 100%;
        border-radius: 12px;
    }

    h1 {
        color: hsl(218, 44%, 22%);
        font-size: 22px;
        font-weight: 800;
    }

    p {
        margin-top: 16px;
        color: hsl(220, 15%, 55%);
        font-size: 15px;
    }

</style>