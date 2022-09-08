<template>
    <v-container fluid>

        <v-form>
            <v-file-input 
                label="Selecione as Legendas"
                prepend-icon="mdi-message-text"
                append-outer-icon="mdi-send" 
                outlined
                multiple 
                chips 
                v-model="files"
                @click:append-outer="processSubtitles" />
                <!-- append-icon="mdi-send" -->
        </v-form>

        <div class="pills">
            <PillVue v-for="word in groupedWords" :key="word.name"
                :name="word.name" :amount="word.amount" />
        </div>
    </v-container>
</template>

<script>
// import { IpcRenderer } from 'electron';
import { ipcRenderer } from 'electron';
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
            ]
        }
    },
    methods: {
        processSubtitles() {
            console.log(this.files)
            ipcRenderer.send('chanelThis', 'ping')
            ipcRenderer.on('chanelThis', (event, resp) => {
                console.log(resp)
            })
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