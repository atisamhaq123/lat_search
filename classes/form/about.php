<?php
namespace local_lat_search\form;

defined('MOODLE_INTERNAL') || die();
require_once($CFG->libdir . '/formslib.php');

use moodleform;

class about extends moodleform
{
    public function definition()
    {
        $mform = $this->_form;
        $mform->addElement('html', '<div class="form_section">');
        $mform->addElement('html', '<h3 class="heading mb-24">' . 'Group About' . '</h3>');
      

        $this->add_action_buttons(false, get_string('save'));
        $mform->addElement('html', '</div>');

    }
}