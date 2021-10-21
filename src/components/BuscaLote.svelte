<script>
    import { Row, Col, Button, Icon } from 'framework7-svelte';

    let lote;

</script>

<div class="visor">
    <p>{lote}</p>
</div>

<div class="teclado">
<Row>
    <Col><Button raised large on:click={boton}>1</Button></Col>
    <Col><Button raised large>2</Button></Col>
    <Col><Button raised large>3</Button></Col>
</Row>
<Row>
    <Col><Button raised large>4</Button></Col>
    <Col><Button raised large>5</Button></Col>
    <Col><Button raised large>6</Button></Col>
</Row>
<Row>
    <Col><Button raised large>7</Button></Col>
    <Col><Button raised large>8</Button></Col>
    <Col><Button raised large>9</Button></Col>
</Row>
<Row>
    <Col></Col>
    <Col><Button raised large>0</Button></Col>
    <Col><Button raised large><Icon f7="delete_left" /></Button></Col>
</Row>
</div>

<style>
.visor {


}
.teclado {
    text-align: center;
    font-size: 1.8em;
    margin: 1em;
}
:global(.teclado div[class*="col"]) {
    padding: 0.3em 0;
}

</style>