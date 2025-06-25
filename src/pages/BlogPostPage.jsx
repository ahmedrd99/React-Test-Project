 import { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';


export function BlogPostPage() {
  const [posts,setPosts]=useState([])
const {state}= useLocation();
console.log(state )

useEffect(()=>{
  if(state&& state.posts){
     setPosts(state.posts)
  }
}, [state])

return( 
  <div>
    <h1> Welcome to BlogPosts Page</h1>
    {posts.map(post=> 
      <div key={post.id}>
         <h1><span><b>Title :     </b></span>{post.title}</h1>
      <section>
       
        <h1><span><b>Content : </b></span> {post.content}</h1>
      
      </section>
        </div>


    )}
  </div>
)



  // const [showPopup, setShowPopup] = useState(false);

  // return (
  //   <div style={{ padding: '20px', textAlign: 'center' }}>
  //     <b style={{ fontSize: '24px' }}>Welcome to This BlogPostPage</b>
      
  //     {/* Bouton déclencheur */}
  //     <button
  //       onClick={() => setShowPopup(true)}
  //       style={{
  //         padding: '12px 28px',
  //         background: 'linear-gradient(135deg, #667eea, #764ba2)',
  //         color: 'white',
  //         border: 'none',
  //         borderRadius: '50px',
  //         cursor: 'pointer',
  //         fontSize: '16px',
  //         fontWeight: 'bold',
  //         boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  //         margin: '30px 0',
  //         transition: 'all 0.3s ease',
  //         display: 'inline-flex',
  //         alignItems: 'center',
  //         gap: '8px'
  //       }}
  //       onMouseEnter={(e) => {
  //         e.target.style.transform = 'translateY(-2px)';
  //         e.target.style.boxShadow = '0 7px 20px rgba(0, 0, 0, 0.25)';
  //       }}
  //       onMouseLeave={(e) => {
  //         e.target.style.transform = 'translateY(0)';
  //         e.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
  //       }}
  //     >
  //       <span>✨ Voir l'Offre Spéciale</span>
  //     </button>

  //     {/* Overlay et Pop-up */}
  //     {showPopup && (
  //       <div
  //         style={{
  //           position: 'fixed',
  //           top: 0,
  //           left: 0,
  //           right: 0,
  //           bottom: 0,
  //           backgroundColor: 'rgba(0, 0, 0, 0.85)',
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           zIndex: 1000,
  //           backdropFilter: 'blur(5px)'
  //         }}
  //         onClick={() => setShowPopup(false)}
  //       >
  //         {/* Contenu du pop-up - clic outside ne ferme PAS */}
  //         <div
  //           style={{
  //             position: 'relative',
  //             width: '90%',
  //             maxWidth: '600px',
  //             background: 'white',
  //             borderRadius: '20px',
  //             padding: '40px',
  //             boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
  //             animation: 'scaleUp 0.4s ease-out',
  //             textAlign: 'center',
  //             overflow: 'hidden',
  //             border: '1px solid rgba(255, 255, 255, 0.2)'
  //           }}
  //           onClick={(e) => e.stopPropagation()}
  //         >
  //           {/* Bouton fermeture */}
  //           <button
  //             onClick={() => setShowPopup(false)}
  //             style={{
  //               position: 'absolute',
  //               top: '15px',
  //               right: '15px',
  //               background: 'transparent',
  //               border: 'none',
  //               fontSize: '24px',
  //               cursor: 'pointer',
  //               color: '#888',
  //               transition: 'color 0.2s'
  //             }}
  //             onMouseEnter={(e) => e.target.style.color = '#ff4757'}
  //             onMouseLeave={(e) => e.target.style.color = '#888'}
  //           >
  //             &times;
  //           </button>

  //           {/* Icone décorative */}
  //           <div style={{
  //             fontSize: '60px',
  //             marginBottom: '20px',
  //             color: 'linear-gradient(135deg, #667eea, #764ba2)',
  //             background: 'linear-gradient(135deg, #667eea, #764ba2)',
  //             WebkitBackgroundClip: 'text',
  //             WebkitTextFillColor: 'transparent',
  //             display: 'inline-block'
  //           }}>
  //             ✨
  //           </div>

  //           <h2 style={{
  //             margin: '0 0 15px 0',
  //             color: '#333',
  //             fontSize: '28px',
  //             fontWeight: '700',
  //             lineHeight: '1.3'
  //           }}>
  //             Offre Exclusive !
  //           </h2>

  //           <p style={{
  //             color: '#666',
  //             fontSize: '18px',
  //             lineHeight: '1.6',
  //             marginBottom: '30px'
  //           }}>
  //             Profitez de <strong>30% de réduction</strong> sur votre première commande avec le code <code style={{ background: '#f1f1f1', padding: '2px 6px', borderRadius: '4px' }}>POPUP30</code>
  //           </p>

  //           <div style={{
  //             display: 'flex',
  //             justifyContent: 'center',
  //             gap: '15px',
  //             flexWrap: 'wrap'
  //           }}>
  //             <button
  //               style={{
  //                 padding: '14px 32px',
  //                 background: 'linear-gradient(135deg, #667eea, #764ba2)',
  //                 color: 'white',
  //                 border: 'none',
  //                 borderRadius: '50px',
  //                 cursor: 'pointer',
  //                 fontSize: '16px',
  //                 fontWeight: '600',
  //                 boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
  //                 transition: 'all 0.3s ease',
  //                 minWidth: '200px'
  //               }}
  //               onMouseEnter={(e) => {
  //                 e.target.style.transform = 'translateY(-2px)';
  //                 e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.6)';
  //               }}
  //               onMouseLeave={(e) => {
  //                 e.target.style.transform = 'translateY(0)';
  //                 e.target.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
  //               }}
  //             >
  //               Profiter de l'offre
  //             </button>

  //             <button
  //               onClick={() => setShowPopup(false)}
  //               style={{
  //                 padding: '14px 32px',
  //                 background: 'transparent',
  //                 color: '#667eea',
  //                 border: '2px solid #667eea',
  //                 borderRadius: '50px',
  //                 cursor: 'pointer',
  //                 fontSize: '16px',
  //                 fontWeight: '600',
  //                 transition: 'all 0.3s ease',
  //                 minWidth: '200px'
  //               }}
  //               onMouseEnter={(e) => {
  //                 e.target.style.background = 'rgba(102, 126, 234, 0.1)';
  //                 e.target.style.transform = 'translateY(-2px)';
  //               }}
  //               onMouseLeave={(e) => {
  //                 e.target.style.background = 'transparent';
  //                 e.target.style.transform = 'translateY(0)';
  //               }}
  //             >
  //               Plus tard
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     )}

  //     {/* Style global inline (alternative aux animations CSS) */}
  //     <style>
  //       {`
  //         @keyframes scaleUp {
  //           from { transform: scale(0.9); opacity: 0; }
  //           to { transform: scale(1); opacity: 1; }
  //         }
  //       `}
  //     </style>
  //   </div>
  // );
}