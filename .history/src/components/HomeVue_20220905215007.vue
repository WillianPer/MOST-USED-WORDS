<template>
    <v-container fluid>
        <div class="pills">
            <PillVue v-for="word in groupedWords" :key="word.name"
                :name="word.name" :amount="word.amount" />
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
                { name: "i", amount: 1234 },
                { name: "you", amount: 900 },
                { name: "he", amount: 853 },
                { name: "i", amount: 1234 },
                { name: "you", amount: 900 },
                { name: "he", amount: 853 },
                { name: "i", amount: 1234 },
                { name: "you", amount: 900 },
                { name: "he", amount: 853 },
                { name: "i", amount: 1234 },
                { name: "you", amount: 900 },
                { name: "he", amount: 853 },
                { name: "i", amount: 1234 },
                { name: "you", amount: 900 },
                { name: "he", amount: 853 },
                { name: "i", amount: 1234 },
                { name: "you", amount: 900 },
                { name: "he", amount: 853 },
                { name: "you", amount: 900 },
            ]
        }
    }
}
</script>

<style>
    .pills {
        display: flex;
        flex-wrap: wrap;
    }

</style>