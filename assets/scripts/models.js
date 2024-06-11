function postCard({id, description, title, data}){
    return ` <div class="ag-courses_item" data-id="${id}">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <div class="ag-courses-item_title">
            ${description}
        </div>

        <div class="ag-courses-item_date-box">
            ${title}
                <span class="ag-courses-item_date">
                    ${data}
                </span>
        </div>
      </a>
    </div>`
};

export {
    postCard
};