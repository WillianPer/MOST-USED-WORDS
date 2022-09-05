<template>
    <v-container fluid>
        <div class="pills">
            <PillVue v-for="word in groupedWords" :key="word.name"
                name="Teste" amount="10" />
        </div>
    </v-container>
</template>

<script>
import PillVue from './PillVue.vue';
export default {
    components: { PillVue },
    data: function () {
        return {
            groupedWords: [
                { name: "i", amount: 1234 },
                { name: "you", amount: 900 },
                { name: "he", amount: 853 },
                
            ]
        }
    }
}
</script>

<style>

</style>