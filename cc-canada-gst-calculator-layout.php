<?php
function load_cc_canada_gst_calc($id, $title, $show_url = 0, $bg_color, $border_color, $text_color)
{
    if ($show_url == 1)
        load_cc_gst_custom_colors($id, $bg_color, $border_color, $text_color);
?>


<div class="CCG-Widget CCG-Widget-<?php echo $id; ?>">
	 	<div class="CCG-WidgetTitle CCG-WidgetTitle-<?php echo $id; ?>"><?php echo $title; ?></div>		   
        <div class="CCG-rowdiv">
			 <div class="CCG-leftdiv">
                <label for="<?php echo $id; ?>-including-gst">Price including GST $ :</label>
			 </div>
			 <div class="CCG-rightdiv">
  	    	    <input id="<?php echo $id; ?>-including-gst" class="canada-including-gst" type="text" placeholder="including GST">
			 </div>
        </div>
        <div class="CCG-rowdiv">
			 <div class="CCG-leftdiv">
                <label for="<?php echo $id; ?>-excluding-gst">Price excluding GST $ :</label>
			 </div>
			 <div class="CCG-rightdiv">
  	    	    <input id="<?php echo $id; ?>-excluding-gst" class="canada-excluding-gst" type="text" placeholder="excluding GST">
			 </div>
        </div>
        <div class="CCG-rowdiv">
			 <div class="CCG-leftdiv">
                <label for="<?php echo $id; ?>-gst">GST $ :</label>
			 </div>
			 <div class="CCG-rightdiv">
  	    	    <input id="<?php echo $id; ?>-gst" class="canada-gst" type="text" placeholder="GST">
			 </div>
        </div>
        <div class="CCG-rowdiv">
			 <div class="CCG-leftdiv"><label></label>
			 </div>
			 <div class="CCG-rightdiv">
  	    	    <button id="<?php echo $id; ?>-clear" class="CCG-button canada-clear" type="button">Clear values</button>
			 </div>
        </div>


 
        <?php if ($show_url) { ?>
    		<div class="CCG-rowdiv" >
                <div class="CCG-WidgetSignature CCG-WidgetSignature-<?php echo $id; ?>">Provided by <a href="http://gstcalculator.ca" target="_blank">GSTcalculator.ca</a></div>
		    </div>
        <?php } ?>
		
</div>

		
		<?php 
}


function load_cc_gst_custom_colors($id, $bg_color, $border_color, $text_color)
{
?>
<style type="text/css">
.CCG-Widget-<?php echo $id; ?>, .CCG-WidgetTitle-<?php echo $id; ?> a, .CCG-WidgetTitle-<?php echo $id; ?> a:visited, .CCG-WidgetSignature-<?php echo $id; ?> a, .CCG-WidgetSignature-<?php echo $id; ?> a:visited, .CCG-WidgetLine-<?php echo $id; ?> {
    <?php echo (isset( $border_color) ? "border-color:" . $border_color . ";" : ""); ?>
    <?php echo (isset( $bg_color) ? "background-color:" . $bg_color . ";": ""); ?>
    <?php echo (isset( $text_color) ? "color:" . $text_color . " !important;": ""); ?>
}

.CCG-Widget-<?php echo $id; ?> input[type=text] {
    <?php echo (isset( $border_color) ? "border-color:" . $border_color . ";": ""); ?>
    <?php echo (isset( $text_color) ? "color:" . $text_color . ";": ""); ?>
    <?php echo (isset( $input_bg_color) ? "background-color:" . $input_bg_color . ";": ""); ?>
} 
</style>
<?php 
}
?>