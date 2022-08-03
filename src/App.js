import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
    
    <div class="input input_border-style">
        <div class="field">
            <div type="text" class="topText">Дата и время заказа</div>
            <div class="inputForm inputForm_borderBlue">
                <input type="text" class="inp" placeholder="Введите"></input>.
            </div>
        </div>
        <div class="field">
            <div type="text" class="topText">Дата и время заказа</div>
            <div class="inputForm inputForm_borderRed">
                <input type="text" class="inp" id="black" placeholder="06.12.21"></input>.
                <input type="button" value="&#215;" class="x"></input>.
            </div>
        </div>
        <div class="field">
            <div type="text" class="topText">Дата и время заказа</div>
            <div class="inputForm inputForm_borderBlue inputForm_backgroundBlue">
                <input type="text" class="inp" id="black" placeholder="06.12.21" disabled></input>.
                <svg xmlns="http://www.w3.org/2000/svg" class="lock" viewBox="0 0 448 512">
                    <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/>
                </svg>
            </div>
        </div>
    </div>

    <div class="searchbar input_border-style">
        <div class="inputForm inputForm_borderBlue" id="searchForm">
            <svg class = "search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 550 550">
                <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
            </svg>
            <input type="text" name="searchFocus" id="" class="inp" placeholder="Номер заказа или ФИО"></input>.
        </div>
        <div class="inputForm inputForm_borderBlue" id="searchForm">
            <svg class = "search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 550 550">
                <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
            </svg>
            <input type="text" name="searchFocus" id="black" class="inp" placeholder="Номер заказа или ФИО"></input>.
            <input type="button" value="&#215;" class="x"> </input>.
        </div>
    </div>

    <div class="checkbox-radio">
        <div class="checkbox-pos input_border-style">
            <input type="checkbox" class="check" name="" id=""></input>.
            <input type="checkbox" class="check" checked="checked" name="" id=""></input>.
        </div>

        <div class="radio-pos input_border-style">
            <input type="radio" class="radio" name="" id=""></input>.
            <input type="radio" class="radio" checked="checked" name="" id=""></input>.
        </div>
    </div>

    
    
    <div class="button input_border-style">
        <div class="buttonBlock">
            <div class="buttonOne">
                <button class="backgroundBlue backgroundBlue_Big">
                    <span class="search-icon">
                        <svg class = "searchButton searchButton_White" width="14" height="14">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 
                          1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 
                          144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 
                          57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                        </svg>
                    </span>
                    Text here
                </button>
            </div>
            <div class="buttonTwo">
                <button class="backgroundBlue backgroundBlue_Big">
                    Text here
                </button>
            </div>
            <div class="buttonThree">
                <button class="backgroundBlue backgroundBlue_Big">
                    <span class="search-icon">
                        <svg class = "searchButton searchButton_White" width="14" height="14">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 
                          1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 
                          144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 
                          57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>

        <div class="buttonBlock">
            <div class="buttonOne">
                <button class="textBlue textBlue_Big">
                    <span class="search-icon">
                        <svg class = "searchButton searchButton_Blue" width="14" height="14">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 
                          1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 
                          144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 
                          57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                        </svg>
                    </span>
                    Text here
                </button>
            </div>
            <div class="buttonTwo">
                <button class="textBlue textBlue_Big">
                    Text here
                </button>
            </div>
            <div class="buttonThree">
                <button class="textBlue textBlue_Big">
                    <span class="search-icon">
                        <svg class = "searchButton searchButton_Blue" width="14" height="14">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 
                          1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 
                          144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 
                          57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>

        <div class="buttonBlock">
            <div class="buttonOne">
                <button class="textBlack">
                    <span class="search-icon">
                        <svg class = "searchButton" width="14" height="14">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 
                          1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 
                          144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 
                          57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                        </svg>
                    </span>
                    Text here
                </button>
            </div>
            <div class="buttonTwo">
                <button class="textBlack">
                    Text here
                </button>
            </div>
            <div class="buttonThree">
                <button class="textBlack">
                    <span class="search-icon">
                        <svg class = "searchButton" width="14" height="14">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 
                          1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 
                          144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 
                          57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>

        <div class="buttonBlock">
            <div class="buttonOne">
                <button class="backgroundBlue backgroundBlue_Small">
                    <span class="search-icon">
                        <svg class = "searchButton searchButton_White" width="14" height="14">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 
                          1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 
                          144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 
                          57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                        </svg>
                    </span>
                    Text here
                </button>
            </div>
            <div class="buttonTwo">
                <button class="backgroundBlue backgroundBlue_Small">
                    Text here
                </button>
            </div>
            <div class="buttonThree">
                <button class="backgroundBlue backgroundBlue_Small">
                    <span class="search-icon">
                        <svg class = "searchButton searchButton_White" width="14" height="14">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 
                          1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 
                          144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 
                          57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>

        <div class="buttonBlock">
            <div class="buttonOne">
                <button class="textBlue textBlue_Small">
                    <span class="search-icon">
                        <svg class = "searchButton searchButton_Blue" width="14" height="14">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 
                          1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 
                          144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 
                          57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                        </svg>
                    </span>
                    Text here
                </button>
            </div>
            <div class="buttonTwo">
                <button class="textBlue textBlue_Small">
                    Text here
                </button>
            </div>
            <div class="buttonThree">
                <button class="textBlue textBlue_Small">
                    <span class="search-icon">
                        <svg class = "searchButton searchButton_Blue" width="14" height="14">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 
                          1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 
                          144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 
                          57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>


    <div class="dropdowns input_border-style">
        <div class="dropdown dropdown_style">
            <ul style="list-style: none">
                <li><input type="checkbox" class="dropdownCheck" name="" id=""></input>.Новый</li>
                <li class="noLi"></li>
                <li><input type="checkbox" class="dropdownCheck" name="" id=""></input>.Рассчет</li>
                <li class="noLi"></li>
                <li><input type="checkbox" class="dropdownCheck" checked="checked" name="" id=""></input>.Подтвержден</li>
                <li class="noLi"></li>
                <li><input type="checkbox" class="dropdownCheck" name="" id=""></input>.Отложен</li>
                <li class="noLi"></li>
                <li><input type="checkbox" class="dropdownCheck" name="" id=""></input>.Выполнен</li>
                <li class="noLi"></li>
                <li><input type="checkbox" class="dropdownCheck" name="" id=""></input>.Отменен</li>
            </ul>
        </div>
        <div class="dropdown dropdown_style">
            <ul style="list-style: none">
                <li>Новый</li>
                <li class="noLi"></li>
                <li>Рассчет</li>
                <li class="noLi"></li>
                <li id="checkedLi">Подтвержден</li>
                <li class="noLi"></li>
                <li>Отложен</li>
                <li class="noLi"></li>
                <li>Выполнен</li>
                <li class="noLi"></li>
                <li>Отменен</li>
            </ul>
        </div>
        <div class="dropdown dropdown_style" style="border: none; box-shadow: none;" ></div>
        <div class="dropdown dropdown_style">
            <span class="topText">
                Номер страницы
            </span>
            <input type="text" name="" id="" placeholder="Введите номер" class="inputFormDrDw inputForm_borderBlue"></input>.
        </div>
        <div class="dropdown dropdown_style" id="alignItems">
            <span class="topText">
                Удалить n записей
            </span>
            <div class="buttonTwo">
                <button class="textBlue textBlue_Small">
                    Удалить
                </button>
            </div>
            <div class="buttonTwo">
                <button class="backgroundBlue backgroundBlue_Small">
                    Отменить
                </button>
            </div>
        </div>
        <div class="dropdown dropdown_style">
            <span class="topText">
                Выберете тему
            </span>
            <div class="buttonOne">
                <button class="textBlue textBlue_Small">
                    <span class="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 
                            0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 
                            8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 
                            13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 
                            1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                        </svg>
                    </span>
                    Светлая
                </button>
            </div>
            <div class="buttonOne">
                <button class="backgroundBlue backgroundBlue_Small">
                    <span class="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 
                            0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 
                            .278z"/>
                        </svg>
                    </span>
                    Темная
                </button>
            </div>
        </div>
    </div>
    
</body>


  );
}

export default App;
