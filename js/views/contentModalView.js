const contentModal = document.getElementById("contentModal")
console.log(contentModal)

export function rederContent(data_type_question)
{
    let content = ""

    if (data_type_question == "4_Options")
    {
        console.log("cilco sim")
        content = 
        `
        <div class="d-flex flex-column justify-content-center p-4">
            
            <div class="d-flex flex-row justify-content-between">
                <button class="col-6 customBtn rounded-pill m-1 active option1">opção 1</button>
                <button class="col-6 customBtn rounded-pill m-1 active option2">opção 2</button>    
            </div>
        
            <!-- Force next columns to break to new line -->
            <div class="w-100 d-none d-md-block">

            </div>
        
            <div class="d-flex flex-row justify-content-between">
                <button class="col-6 customBtn rounded-pill m-1 active option3">opção 3</button>
                <button class="col-6 customBtn rounded-pill m-1 active option4">opção 4</button>    
            </div>

        </div>
        `
        contentModal.innerHTML = content
    }
    else
    {
        console.log("teste")
    }
}