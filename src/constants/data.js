import icons from "./icons"
import images from "./images"
import { COLORS } from "./theme"

const homelist = [
    {
        id: 1,
        title: 'On going',
        task: '24 task',
        icon: "refresh",
        color: COLORS.blueF2
    },
    {
        id: 2,
        title: 'In Process',
        task: '12 task',
        icon: "clock",
        color: COLORS.yellow47
    },
    {
        id: 3,
        title: 'Completed',
        task: '42 task',
        icon: "file",
        color: COLORS.blueC5
    },
    {
        id: 4,
        title: 'Canceled',
        task: '8 task',
        icon: "file-remove",
        color: COLORS.red56
    },
]

const recentTaskList = [
    {
        id: 1,
        title: 'Website for Rune.io',
        subtitle: 'Digital product design',
        task: '12 task',
        completeness: 40,
        color: COLORS.red56
    },
    {
        id: 2,
        title: 'Dashboard for ProSavvy',
        subtitle: 'Digital product design',
        task: '12 task',
        completeness: 75,
        color: COLORS.blueC5
    },
    {
        id: 3,
        title: 'Mobile Apps for Track.io',
        subtitle: 'Digital product design',
        task: '12 task',
        completeness: 50,
        color: COLORS.yellow47
    },
    {
        id: 4,
        title: 'Website for Courrier.io',
        subtitle: 'Digital product design',
        task: '12 task',
        completeness: 40,
        color: COLORS.blueF2
    },
]


export default {
    homelist,
    recentTaskList
}