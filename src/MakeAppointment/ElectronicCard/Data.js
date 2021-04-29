import Info from '../../img/ElectronicCard/INFO.svg';
import Add from '../../img/ElectronicCard/Add.svg';
import Result from '../../img/ElectronicCard/Result.svg';
import History from '../../img/ElectronicCard/History.svg';

const data = [
    {
        title: "Информация о пациенте",
        textOne: "Ваши личные данные",
        textTwo: "Рекомендации врачей",
        textThree: "История болезней",
        picture: Info,
        id: 0
    },

    {
        title: "Результаты анализов",
        text: "Вы можете узнать здесь результаты своих анализов",
        picture: Result,
        id: 1
    },

    {
        title: "Добавить  информацию",
        text: "Добавляйте в свою электронную медицинскую карту новые данные",
        picture: Add,
        id: 2
    },

    {
        title: "История приемов",
        text: "Вся информация о полученных услугах за все время хранится здесь",
        picture: History,
        id: 3
    }
]
export default data;
