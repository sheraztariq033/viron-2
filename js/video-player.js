/**
 * VIREON DIGITAL - Video Showcase & Lightbox Player
 * Custom video theater with category filtering, modal lightbox, and smooth playback.
 */

class VireonVideoPlayer {
  constructor() {
    this.modalBackdrop = document.getElementById('video-modal');
    this.modalTitle = document.getElementById('video-modal-title');
    this.modalBody = document.getElementById('video-modal-body');
    this.modalCloseBtn = document.getElementById('video-modal-close');
    this.filterButtons = document.querySelectorAll('.video-filter-btn');
    this.videoCards = document.querySelectorAll('.video-card');

    this.init();
  }

  init() {
    // Setup filter category switching
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.vireonAudio) window.vireonAudio.playClick();
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterCategory = btn.getAttribute('data-category');
        this.filterVideos(filterCategory);
      });
    });

    // Setup Video Card Click to Open Modal
    this.videoCards.forEach(card => {
      card.addEventListener('click', () => {
        const videoId = card.getAttribute('data-video-id');
        this.openModal(videoId);
      });
    });

    // Close Modal Events
    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener('click', () => this.closeModal());
    }

    if (this.modalBackdrop) {
      this.modalBackdrop.addEventListener('click', (e) => {
        if (e.target === this.modalBackdrop) {
          this.closeModal();
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalBackdrop?.classList.contains('open')) {
        this.closeModal();
      }
    });
  }

  filterVideos(category) {
    this.videoCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
        setTimeout(() => { card.style.opacity = '1'; }, 20);
      } else {
        card.style.opacity = '0';
        setTimeout(() => { card.style.display = 'none'; }, 250);
      }
    });
  }

  openModal(videoId) {
    const videoData = (window.VIREON_CONFIG?.videos || []).find(v => v.id === videoId);
    if (!videoData || !this.modalBackdrop) return;

    if (window.vireonAudio) window.vireonAudio.playClick();

    if (this.modalTitle) {
      this.modalTitle.textContent = videoData.title;
    }

    // Embed local video with fallback to Google Drive
    if (this.modalBody) {
      this.modalBody.innerHTML = `
        <video id="active-modal-video" controls autoplay playsinline style="width:100%;height:100%;object-fit:contain;background:#000;">
          <source src="${videoData.localSrc}" type="video/mp4">
          <p>Your browser does not support local HTML5 video playback. <a href="https://drive.google.com/file/d/${videoData.gdriveId}/view" target="_blank" style="color:#00f0ff;">Click here to watch on Google Drive</a></p>
        </video>
      `;

      const videoElement = document.getElementById('active-modal-video');
      if (videoElement) {
        videoElement.onerror = () => {
          console.warn('Local video source failed, falling back to Google Drive player iframe.');
          this.modalBody.innerHTML = `
            <iframe src="https://drive.google.com/file/d/${videoData.gdriveId}/preview" allow="autoplay; fullscreen" style="width:100%;height:100%;border:none;"></iframe>
          `;
        };
      }
    }

    this.modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (!this.modalBackdrop) return;
    if (window.vireonAudio) window.vireonAudio.playClick();

    this.modalBackdrop.classList.remove('open');
    if (this.modalBody) {
      this.modalBody.innerHTML = '';
    }
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new VireonVideoPlayer();
});
