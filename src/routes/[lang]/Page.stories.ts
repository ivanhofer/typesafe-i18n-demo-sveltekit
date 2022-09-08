import Page from "./+page.svelte"

export default {
    title: "Pages/index",
    component: Page
}

const Template = (args: any) => ({
    Component: Page,
    props: args
})

export const Default = Template.bind({})