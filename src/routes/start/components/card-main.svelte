<link rel="stylesheet" href="style/scss/start-cards/cards.css">
<script>
    import Saos from "saos"
</script>

<div class="main-card-big">
    <div class="left-text-content">
        <div class="image-div"></div>
        <slot name="header"></slot>
        <slot name="text-content"></slot>
    </div>
    <div class="right-code-example">
        <div class="container-code-box">
            <div class="code-editor-header">
                <div class="points-in-header">•</div>
                <div class="file-name"><slot name="code-file-name"></slot></div>
            </div>
            <slot name="code-content"></slot>
        </div>
    </div>
    
    
</div>

