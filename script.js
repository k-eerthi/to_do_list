window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        const dueDate = prompt("Enter due date (optional):"); // Prompt for due date

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        // Add checkbox for completion status
        const task_tick_el = document.createElement('input');
        task_tick_el.classList.add('tick');
        task_tick_el.type = 'checkbox';
        task_content_el.appendChild(task_tick_el);

        // Add date input field
        const task_date_el = document.createElement('input');
        task_date_el.classList.add('date');
        task_date_el.type = 'date';
        if (dueDate) task_date_el.value = dueDate;
        task_content_el.appendChild(task_date_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = '';

        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });

        // Toggle completion status on checkbox change
        task_tick_el.addEventListener('change', () => {
            if (task_tick_el.checked) {
                task_input_el.style.textDecoration = 'line-through';
                // You can add additional styling or actions for completed tasks
            } else {
                task_input_el.style.textDecoration = 'none';
            }
        });
    });
});
