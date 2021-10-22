<script>
    import { Page, Navbar, NavTitle, List, ListInput,Button } from "framework7-svelte";
    import InputLote from '../components/InputLote.svelte';

    let lote;

    function buscarLote() {
        console.log('BUSCAR');
    }

</script>

<Page name="nueva_solicitud">
    <Navbar backLink>
        <NavTitle>Nueva solicitud</NavTitle>
    </Navbar>
    <List noHairlinesMd>
        <InputLote bind:lote on:buscar={buscarLote}></InputLote>
        <ListInput label="Nombre" type="text" placeholder="nombre" />
        <ListInput label="Motivo" type="select"  value="">
            <i class="icon demo-list-icon" slot="left" />
            <option value="Cadete">Cadete</option>
            <option value="Plomero">Plomero</option>
            <option value="Jardinero">Jardinero</option>
            <option value="Electricista">Electricista</option>
            <option value="Visita">Visita</option>
        </ListInput>
    </List>
    <Button outline>Agregar</Button>
</Page>
