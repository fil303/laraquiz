<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RandomQuizRequestTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/api/random-quiz');
        $response->assertJson([
            "status"  => true,
            "message" => "Success"
        ]);
        $response->assertStatus(200);
    }
}
