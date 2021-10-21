<script>
    import { Page, Navbar, NavTitle, List, ListInput,Button } from "framework7-svelte";
    import BuscaLote from '../components/BuscaLote.svelte';
</script>

<Page name="nueva_solicitud">
    <Navbar backLink>
        <NavTitle>Nueva solicitud</NavTitle>
    </Navbar>
    <BuscaLote />
    <List noHairlinesMd>
        <ListInput label="Lote" type="text" placeholder="lote" />
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
