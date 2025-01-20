<!-- Question -->
<h2>{{ $quiz->question }}</h2>

<!-- Numbered List -->
<ol>
    <li class="option-item" data-correct="{{ $quiz->option_answer == 1 ? 'true' : 'false' }}">
        1. {{ $quiz->option_one }}
        <svg class="icon red-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
            <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
    </li>
    <li class="option-item" data-correct="{{ $quiz->option_answer == 2 ? 'true' : 'false' }}">
        2. {{ $quiz->option_two }}
        <svg class="icon red-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
            <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
    </li>
    <li class="option-item" data-correct="{{ $quiz->option_answer == 3 ? 'true' : 'false' }}">
        3. {{ $quiz->option_three }}
        <svg class="icon green-tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" width="24"
            height="24" aria-hidden="true">
            <!-- Circle -->
            <circle cx="12" cy="12" r="11" stroke="green" stroke-width="2" fill="none" />
            <!-- Tick -->
            <path d="M9.5 13.5l2.5 2.5 5-6" stroke="green" stroke-width="2" fill="none" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
    </li>
    <li class="option-item" data-correct="{{ $quiz->option_answer == 4 ? 'true' : 'false' }}">
        4. {{ $quiz->option_four }}
        <svg class="icon red-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
    </li>
</ol>