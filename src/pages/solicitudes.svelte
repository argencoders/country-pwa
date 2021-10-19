<script>
  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button,
    Tabs,
    Tab,
    Icon,
    Fab,
  } from "framework7-svelte";
  import Lote from "../components/Lote.svelte";
</script>

<Page ptr name="solicitudes">
  <!-- Top Navbar -->
  <Navbar>
    <NavTitle>Country</NavTitle>
    <NavRight>
      <Link
        iconIos="f7:menu"
        iconAurora="f7:menu"
        iconMd="material:menu"
        panelOpen="right"
      />
    </NavRight>
  </Navbar>
  <!-- Toolbar -->
  <Toolbar tabbar top>
    <Link tabLink="#tab-pendientes">Pendientes</Link>
    <Link tabLink="#tab-historial">Historial</Link>
  </Toolbar>
  <!-- Page content -->
  <Tabs>
    <Tab id="tab-pendientes" tabActive>
      <List>
        <ListItem
          link="#"
          title="Carpintero"
          footer="Matias Pando"
          after="Enviado"
          noChevron
        >
          <Lote slot="media">33</Lote>
        </ListItem>
        <ListItem
          link="#"
          title="Cadete"
          footer="Juan gonzalez"
          after="Leído"
          noChevron
        >
          <Lote slot="media">7</Lote>
        </ListItem>
        <ListItem  title="Jardinero" after="Autorizado" noChevron >  <!--  link="/solicitudes/nueva/" -->
          <Lote slot="media">147</Lote>
        </ListItem>
        <ListItem link="/about/" title="Cadete" after="Autorizado" noChevron>
          <Lote slot="media">21</Lote>
        </ListItem>
        <ListItem link="#" title="Plomero" after="Rechazado" noChevron>
          <Lote slot="media">55</Lote>
        </ListItem>
      </List>

      <Fab position="right-bottom" color="blue" href="/solicitudes/nueva/" >
        <Icon ios="f7:plus" aurora="f7:plus" md="material:add"   />
      </Fab>
    </Tab>

    <Tab id="tab-historial">
      <Block>Historial</Block>
      <Icon f7="airplane" />
    </Tab>
  </Tabs>


</Page>
