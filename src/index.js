import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import request from './modules/request'
import calculator from './modules/calculator'
import tabs from './modules/tabs'
import slider from './modules/slider'
import sliderCarousel from './modules/sliderCarousel'
import calc from './modules/calc'
import sendForm from "./modules/sendForm";


timer('25 august 2024')
menu()
modal()
request()
calculator()
tabs()
slider()
sliderCarousel()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
