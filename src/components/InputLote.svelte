<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    import { Row, Col, Button, Icon } from 'framework7-svelte';

    export let lote = "";

    const maxDigitos = 4;


    function agregar(n) {
        if (lote.length >= maxDigitos) return
        lote = lote + n;
    }

    function borrar() {
        lote = lote.substring(0, lote.length - 1);
    }

</script>

<div class="visor">
    {#if !lote}
    <p class="placeholder">Nro de lote</p>
    {:else}
    <p class="lote">{lote}</p>
    {/if}
</div>

<div class="teclado">
<Row>
    <Col><Button raised large on:click={() => agregar(1)}>1</Button></Col>
    <Col><Button raised large on:click={() => agregar(2)}>2</Button></Col>
    <Col><Button raised large on:click={() => agregar(3)}>3</Button></Col>
</Row>
<Row>
    <Col><Button raised large on:click={() => agregar(4)}>4</Button></Col>
    <Col><Button raised large on:click={() => agregar(5)}>5</Button></Col>
    <Col><Button raised large on:click={() => agregar(6)}>6</Button></Col>
</Row>
<Row>
    <Col><Button raised large on:click={() => agregar(7)}>7</Button></Col>
    <Col><Button raised large on:click={() => agregar(8)}>8</Button></Col>
    <Col><Button raised large on:click={() => agregar(9)}>9</Button></Col>
</Row>
<Row>
    <Col><!--Button raised large on:click={() => dispatch('buscar')}><Icon f7="search" /></Button--></Col>
    <Col><Button raised large on:click={() => agregar(0)}>0</Button></Col>
    <Col><Button raised large on:click={borrar}><Icon f7="delete_left" /></Button></Col>
</Row>
</div>

<style>
.visor {
    display: flex;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    height: 6em;
    background-color:#f2f2f2;
    margin: 1.6em 1.6em 0.5em 1.6em;

}
.visor p {
    padding: 0.2e;
    flex: 1;
}

.visor p.lote {
    font-size: 3.5em;
}

.visor p.placeholder {
    font-size: 1.2em;
    color:#888;
}

.teclado {
    text-align: center;
    font-size: 1.8em;
    margin: 0 1em 1em 1em;
}
:global(.teclado div[class*="col"]) {
    padding: 0.3em 0;
}

</style>