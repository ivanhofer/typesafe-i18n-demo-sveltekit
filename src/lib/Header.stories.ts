import Header from "$lib/Header.svelte";

export default {
    title: "Components/Header",
    component: Header
}

const Template = (args:any) => ({
    Component: Header,
    props: args
})

export const Default = Template.bind({})