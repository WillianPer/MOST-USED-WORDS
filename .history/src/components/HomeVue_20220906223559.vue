<template>
    <v-container fluid>

        <v-form>
            <v-file-input multiple chips v-model="files">

            </v-file-input>
        </v-form>

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
            files: [],
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
            ]
        }
    }
}
</script>

<style>
    .pills {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

</style>