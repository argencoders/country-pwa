<script>
    import {
        Page,
        Navbar,
        NavTitle,
        List,
        Button,
        ListItem,
        Icon,
        Input,
        ListInput,
    } from "framework7-svelte";
    let selected = "";
</script>

<Page name="nueva_solicitud">
    <Navbar backLink>
        <NavTitle>Nueva solicitud</NavTitle>
    </Navbar>
    <List>
        <ListInput label="Lote" type="text" placeholder="lote" />
    </List>
    <List menuList>
        <ListItem
            link
            title="Cadete"
            selected={selected === "cadete"}
            onClick={() => (selected = "cadete")}
        >
            <span slot="media">
                <Icon
                    md="material:home"
                    aurora="f7:house_fill"
                    ios="f7:house_fill"
                />
            </span>
        </ListItem>
        <ListItem
            link
            title="Jardinero"
            selected={selected === "jardinero"}
            onClick={() => (selected = "jardinero")}
        >
            <span slot="media">
                <Icon
                    md="material:person"
                    aurora="f7:person_fill"
                    ios="f7:person_fill"
                />
            </span>
        </ListItem>
        <ListItem
            link
            title="Visita"
            selected={selected === "visita"}
            onClick={() => (selected = "visita")}
        >
            <span slot="media">
                <Icon
                    md="material:settings"
                    aurora="f7:gear_alt_fill"
                    ios="f7:gear_alt_fill"
                />
            </span>
        </ListItem>
    </List>
    <List>
        <ListInput
            label="Notas"
            type="textarea"
            placeholder="nombre o descripcion o DNI"
        />
    </List>
    <Button outline>Agregar</Button>
</Page>
