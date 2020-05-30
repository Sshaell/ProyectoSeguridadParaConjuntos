<?php

use Illuminate\Database\Seeder;
use App\Administrador;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $admin = new Administrador;
        $admin->nombre = 'Root';
        $admin->apellido = 'Admin';
        $admin->cedula = '1111111';
        $admin->contrasena = md5('administradorcito');

        $admin->save();
    }
}
