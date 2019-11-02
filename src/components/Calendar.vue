<!--
 * @Author: johnwang
 * @since: 2019-11-02 23:12:11
 * @lastTime: 2019-11-02 23:13:17
 * @LastAuthor: Do not edit
 * @Github: https://github.com/tyutjohn
 -->
<template>
    <div>
        <el-calendar>
            <template slot="dateCell" slot-scope="{date, data}">
                <p :class="data.isSelected ? 'is-selected' : ''">
                    {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
                </p>
            </template>
        </el-calendar>
    </div>
</template>
<style>
    .is-selected {
        color: #1989FA;
    }
</style>

<script>
    export default {
        data() {
            return {

            };
        },

        components: {},

        computed: {},

        beforeMount() {},

        mounted() {},

        methods: {},

        watch: {}

    }
</script>