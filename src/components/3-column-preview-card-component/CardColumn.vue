<script>
export default {
    props: {
        cardColumn: String,
        bgColorClass: String,
        columnIcon: String,
        columnTitle: String,
        columnParagraph: String
    }
}
</script>

<template>
    <div class="cardColumn" :class="bgColorClass">
        <div>
            <img :src="columnIcon" />
            <h2>{{ columnTitle }}</h2>
            <p>{{ columnParagraph }}</p>
            <button>Learn More</button>
        </div>
    </div>
</template>



<style>
@font-face {
    font-family: "Lexend Deca";
    src: url("/3-column-preview-card-component-assets/LexendDeca-VariableFont_wght.ttf") format("truetype");
}

@font-face {
    font-family: "Big Shoulders Display";
    src: url("/3-column-preview-card-component-assets/BigShouldersDisplay-VariableFont_wght.ttf") format("truetype");
}

:root {
    --theme-bright-orange: hsl(31, 77%, 52%);
    --theme-dark-cyan: hsl(184, 100%, 22%);
    --theme-very-dark-cyan: hsl(179, 100%, 13%);

    --theme-transparent-white: hsla(0, 0%, 100%, 0.75);
    /* paragraphs */
    --theme-very-light-gray: hsl(0,
            0%,
            95%);
    /* background, headings, buttons */

    --font-theme-lexend: "Lexend Deca";
    --font-theme-shoulders: "Big Shoulders Display";
}

.cardColumn {
    width: 33.33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 38px;
}

.cardColumn>div {
    width: 100%;
    height: 100%;
    position: relative;
}

.sedanBg {
    background-color: var(--theme-bright-orange);
}

.suvBg {
    background-color: var(--theme-dark-cyan);
}

.luxuryBg {
    background-color: var(--theme-very-dark-cyan);
}

h2 {
    color: var(--theme-very-light-gray);
    font-family: var(--font-theme-shoulders);
    font-size: 32px;
    text-transform: uppercase;
}

p {
    color: var(--theme-transparent-white);
    font-family: var(--font-theme-lexend);
    font-size: 15px;
    line-height: 24px;
}

button {
    position: absolute;
    bottom: 0px;
    border: 2px solid var(--theme-very-light-gray);
    /* Set border width and color */
    padding: 12px 30px;
    border-radius: 50px;
    background-color: var(--theme-very-light-gray);
    font-size: 15px;
    font-family: var(--font-theme-lexend);
    mix-blend-mode: lighten;
}

button:hover {
    background-color: transparent;
    mix-blend-mode: normal;
    color: var(--theme-very-light-gray);
    cursor: pointer;
}

@media (max-width: 720px) {
    .cardColumn {
        width: 100%;
        height: 33.33%;
    }
}
</style>