<template>
    <main class="bg-[#EEEEEE] min-h-screen">
        <div class="flex justify-center items-center p-10">
            <div class="p-10 m-10 w-2/3 flex flex-col">
                <h1 class="font-bold text-4xl p-2">Tudo o que você procura, em um só lugar. Compre fácil, receba rápido</h1>
                <p class="text-xl p-2">Aqui, cada detalhe foi pensado para tornar sua experiência mais prática, segura e prazerosa.</p>
                <div class="p-2">
                    <button
                        class="p-2 cursor-pointer bg-[var(--cor-botoes)] text-white transition-all hover:scale-110 hover:bg-[var(--cor-botoes-hover)] text-center rounded-2xl"><router-link
                            to="/products">Conheça nossos Produtos</router-link></button>
                </div>
            </div>
            <div class="w-1/2">
                <img src="../assets/img/original-ef691e8365fd7d171d7526d04bd053b0.gif" class="rounded-full transition-transform hover:scale-105" alt="Foto-home">
            </div>
        </div>

    </main>
</template>
